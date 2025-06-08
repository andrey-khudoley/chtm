app.post('/', (ctx: app.Ctx, req: app.Req) => {
  const { a, b } = req.body;
  return "OK";
});
