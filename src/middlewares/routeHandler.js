import { routes } from "../routes.js";

export function routeHandler(request, response){
    // Recupera a rota conforme o método e URL.
    const route = routes.find((route) => {
        return route.method === request.method && route.path === request.url
    })

    // Se a rota é encontrada, executa o controller
    if(route){
        return route.controller(request, response)
    }

    // Retorna erro se a rota não é encontrada
    return response.writeHead(404).end("Caminho não identificado")
}