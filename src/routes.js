import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: ({request, response, database}) => {
            const products = database.select("products")

            return response.end(JSON.stringify(products))
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: ({request, response, database}) => {
            const { name, price } = request.body
            database.insert({name, price}, "products")

            return response.writeHead(201).end()
        }
    },
    {
        method: "DELETE",
        path: "/products/:id",
        controller: ({request, response, database}) => {
            return response.writeHead(201).end(`Produto com ID ${request.params.id} foi removido com sucesso.`)
        }
    },

].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}))