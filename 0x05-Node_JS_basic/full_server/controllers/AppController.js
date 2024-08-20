/**
 * Contains the miscellaneous route handlers.
 * @author koech dayyan <https://github.com/calixday>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
