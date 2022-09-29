import express, { Request, Response, Application } from "express";
import routes from "./Routes/index";
import { imageRoot } from "./Paths/paths";

const app: Application = express();
const PORT = 3000;

app.use("/api", routes);
app.get("/", (req: Request, res: Response) => {
    console.log(imageRoot);
    res.send("Hello World !!");
});

app.listen(PORT, () => {
    // console.log(validateNumber("test"));
    console.log(`Server Is Running On Port ${PORT}`);
});

export default app;
