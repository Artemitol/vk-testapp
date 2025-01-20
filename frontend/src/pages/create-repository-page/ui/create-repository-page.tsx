import classes from "./create-repository.module.css"
import { GoBack } from "@features/go-back"
import { RepositoryModel } from "@entities/repository"
import { defaultRepositoryValues } from "@entities/repository"
import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import { toast } from "sonner"
import { z } from "zod"
import { useCreateRepository } from "@features/create-repository"

export function CreateRepositoryPage() {
    const [form] = useForm()
    const createRepo = useCreateRepository()

    function onResetClick() {
        form.resetFields()
    }

    function onFinish() {
        try {
            // Used default value because this will not be comfortable for user
            // to insert data into +-200 inputs (schema in @entities/repositories/model)
            const newRepo: RepositoryModel = defaultRepositoryValues

            newRepo.owner.login = z
                .string()
                .parse(form.getFieldValue("owner login"))
            newRepo.name = z.string().parse(form.getFieldValue("name"))

            const { status } = createRepo(newRepo)

            toast.success(
                `Added new repository to the top of the page. status: ${status}`
            )
        } catch (err) {
            toast.error("Cant add this repository")
            console.error(err)
        }
    }

    return (
        <section className={classes.createRepositoryPage}>
            <h1 className={classes.title}>
                On this page you can create new repository
            </h1>
            <div className={classes.content}>
                <div className={classes.actions}>
                    <GoBack value='back' />
                </div>
                <span className={classes.formTitle}>
                    Enter values of new repo
                </span>
                <Form name='Create repository' form={form} onFinish={onFinish}>
                    <Form.Item
                        label='Name'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: "Enter repository name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='owner login'
                        label='owner login'
                        rules={[
                            {
                                required: true,
                                message: "Enter repository owner login",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Create
                        </Button>
                        <Button onClick={onResetClick}>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}
