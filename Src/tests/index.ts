import express, { Request, Response, Application } from "express";
import routes from "./Routes/index";
import { imageRoot, rootDir } from "./Paths/paths";
import { writeLogs } from "./util/WriteLogs";
import { data } from "./MiddleWare/logs";
const app: Application = express();
const PORT = 3000;

app.use(data);
app.use("/api", routes);
app.get("/", (req: Request, res: Response) => {
    writeLogs(`${rootDir}/logs.txt`, "Welcome To heaven \n");
    console.log(imageRoot);
    res.send("Hello World !!");
});

app.listen(PORT, () => {
    // console.log(validateNumber("test"));
    console.log(`Server Is Running On Port ${PORT}`);
});

export default app;
