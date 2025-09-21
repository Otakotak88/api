export function parseRoutePath (route) {
    const routeParamsRegex = /:([a-zA-Z]+)/g

    const params = route.replaceAll(routeParamsRegex, "(?<$1>[a-z0-9-_]+)")
    
    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

    return pathRegex
}