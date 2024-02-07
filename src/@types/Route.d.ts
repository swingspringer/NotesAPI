export type RouteResponse = Response | Promise<Response>
export type Route = (request: Request, response: Response) => RouteResponse