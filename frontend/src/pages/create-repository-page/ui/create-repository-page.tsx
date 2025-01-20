import { CreateRepository } from "@features/create-repository"
import classes from "./create-repository.module.css"
import { GoBack } from "@features/go-back"
import { RepositoryModel } from "@entities/repository"
import { useState } from "react"
import { defaultRepositoryValues } from "@entities/repository"
import { Form } from "antd"

export function CreateRepositoryPage() {
    const [newRepo, setNewRepo] = useState<RepositoryModel>(
        defaultRepositoryValues
    )

    return (
        <section className={classes.createRepositoryPage}>
            <h1 className={classes.title}>
                On this page you can create new repository
            </h1>
            <div className={classes.content}>
                <div className={classes.actions}>
                    <GoBack value='back' />
                    <CreateRepository dataToCreate={newRepo} label='Create' />
                </div>
                <Form>

                </Form>
            </div>
        </section>
    )
}
