import { QueryTypes } from 'sequelize';
import glpiDatabase from '../config/glpiDatabase';

class EntidadeController {
  async index(req, res) {
    try {
      const entidades = await glpiDatabase.query(
        'SELECT id, name FROM `glpi_entities`',
        {
          type: QueryTypes.SELECT,
        }
      );
      return res.json(entidades);
    } catch (e) {
      console.error(e);
    }
  }

  async show(req, res) {
    try {
      const entidades = await glpiDatabase.query(
        'SELECT id, name FROM `glpi_entities` WHERE id = ?',
        {
          replacements: [req.params.id],
          type: QueryTypes.SELECT,
        }
      );
      return res.json(entidades[0]);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new EntidadeController();
