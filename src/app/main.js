import dva from "dva";
import router from "./router";
import { createLogger } from "redux-logger";
import carShowModel from "./models/carShowModel";
import carPickModel from "./models/carPickModel";

const app = dva({
  onAction: createLogger()
});

app.model(carShowModel);
app.model(carPickModel);

app.router(router);

app.start("#app-container");
