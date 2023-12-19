import Model from './Model.js';

export default class users extends Model {

  static table = "users.tasks";
  static primary = ["idtasks"];
}
