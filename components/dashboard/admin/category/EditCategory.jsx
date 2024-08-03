import { Form, Formik } from "formik"
import DialogContainer from "../../ui/modals/Dialog"
import CustomInput from "@/components/FormElements/CustomInput"
import Button from "../../ui/buttons/Button"
import { useState } from "react"
import * as Yup from 'yup';
import toast from "react-hot-toast"
import adminService from "@/services/adminService"
import { getErrorMessage } from "@/utils/errorUtils"


const EditCategory = ({ open, setOpen, category, token, fetchData }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be 50 characters or less'),
    });

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5">

                    <Formik
                        initialValues={{
                            name: category?.name || '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions) => {

                            setLoading(true)

                            try {

                                const response = await adminService.updateCategory(category._id, values, token);

                                toast.success(response.message);
                                fetchData()
                                setOpen(false)

                            } catch (error) {
                                const message = getErrorMessage(error)
                                toast.error(message)
                            } finally {
                                setLoading(false)
                            }
                          
                        }}
                    >

                        {({ values, setFieldValue, errors, touched }) => (

                            <Form autoComplete='off'>
                                
                                <CustomInput label="Full Name" name="name" type="text" placeholder="School of pure and applied science" />


                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-7">

                                    <Button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        color="text-primary font-medium"
                                        className=" py-3 w-full order-2 sm:order-1"
                                    >
                                        Cancel
                                    </Button>

                                    <Button type="submit"
                                        color="btn-primary"
                                        className=" py-3 w-full order-1 sm:order-2"
                                        loading={loading}>
                                        Update Category
                                    </Button>

                                </div>

                            </Form>

                        )}

                    </Formik>

                </div>

            </DialogContainer>

        </>
    )
}

export default EditCategory