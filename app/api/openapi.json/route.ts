import { buildOpenApiSpec } from "@/lib/openapi";

/** GET /api/openapi.json - la especificación OpenAPI, generada desde los esquemas Zod. */
export async function GET() {
  return Response.json(buildOpenApiSpec());
}
