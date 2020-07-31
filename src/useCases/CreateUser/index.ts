import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresusersRepository } from "../../providers/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresusersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }