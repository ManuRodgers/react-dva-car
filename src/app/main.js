import dva from "dva";
import router from "./router";
import { createLogger } from "redux-logger";
import carShowModel from "./models/carShowModel";

const app = dva({
  onAction: createLogger()
});

app.model(carShowModel);

app.router(router);

app.start("#app-container");
