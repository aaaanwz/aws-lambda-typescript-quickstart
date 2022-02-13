export async function lambdaHandler(event: any): Promise<any> {
  return {
    statusCode: 200,
    body: {
      message: 'Hello World!'
    }
  }
}