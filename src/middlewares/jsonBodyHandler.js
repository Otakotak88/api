export async function jsonBodyHandler(request, response){
    // Organiza as chunks do Body
    const buffers = []

    // Recupera as chunks do Body
    for await (const chunk of request){
        buffers.push(chunk)
    }

    try {
        // Concatena os chunks, em seguida transforma em JSON
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader("Content-Type", "application/json")
}