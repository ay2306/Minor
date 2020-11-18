"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 8050;
const _app = new app_1.App();
_app.app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log(`Server is listening to ${port}`);
    }
});
//# sourceMappingURL=server.js.map