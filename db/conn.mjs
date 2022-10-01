import { Sequelize } from "sequelize";

const sequelize = new Sequelize("thoughts2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso! :)");
} catch (error) {
  console.log(`Não foi possível conectar ao banco de dados: ${error}`);
}

export default sequelize;
