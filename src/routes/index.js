import { router as TodoRouter} from `./todo/todo.route.js`
import {TODO} from `../constans/api.constans`

export const Routes = [
{path: TODO, router : TodoRouter } ];