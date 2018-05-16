import dva from "dva";
import router from "./router";
import todoModel from "./models/todoModel";

const app = dva();

app.model(todoModel);

app.router(router);

app.start("#app-container");
