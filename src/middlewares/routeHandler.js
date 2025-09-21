import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

export function routeHandler(request, response){
    // Recupera a rota conforme o método e URL.
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    // Se a rota é encontrada, executa o controller
    if(route){
        const routeParams = request.url.match(route.path)

        if (routeParams.groups){
            const { query, ...params } = routeParams.groups

            request.params = params
            request.query = query ? extractQueryParams(query) : {}
        }

        return route.controller(request, response)
    }

    // Retorna erro se a rota não é encontrada
    return response.writeHead(404).end("Caminho não identificado")
}