import { ErrorMessage, Form, Formik } from "formik"
import DialogContainer from "../../ui/modals/Dialog"
import CustomInput from "@/components/FormElements/CustomInput"
import Button from "../../ui/buttons/Button"
import { useState } from "react"
import * as Yup from 'yup';
import FileUpload from "../../FileUpload"
import adminService from "@/services/adminService"
import toast from "react-hot-toast"
import { getErrorMessage } from "@/utils/errorUtils"


const AddCategory = ({ open, setOpen, token, fetchData }) => {

    const closeDialog = () => {
        setOpen(false)
    }

    const [loading, setLoading] = useState(false)

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be 50 characters or less'),
        image: Yup.mixed()
            .required('Image is required')
            .test('fileSize', 'The file is too large', value => {
                return value && value.size <= 5 * 1024 * 1024; // 5MB max file size
            })
            .test('fileFormat', 'Unsupported File Format', value => {
                return value && ['image/jpeg', 'image/png'].includes(value.type);
            }),
    });

    return (
        <>

            <DialogContainer open={open} onClose={closeDialog} backdropClick={true} size="medium" >

                <div className="p-5">

                    <Formik
                        initialValues={{
                            name: '',
                            image: null,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions) => {

                            setLoading(true)

                            try {

                                const formData = new FormData();

                                // Append each field to the FormData object
                                formData.append('name', values.name);

                                // Append image only if it's provided
                                if (values.image) {
                                    formData.append('image', values.image);
                                }

                                const response = await adminService.uploadCategory(formData,token);

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

                                <div className="mb-4">
                                    <FileUpload
                                        name="image"
                                        title="Upload Image"
                                        label="Upload Post Image (JPG, JPEG, PNG)"
                                        btnColor="btn-success"
                                        className="border border-dashed border-[#D0D5DD]"
                                        multiple={false}
                                        accept="image/jpeg,image/png"
                                        error={touched.image && errors.image}
                                        onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                                    />
                                    {touched.image && errors.image && (
                                        <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.image}</div>
                                    )}
                                </div>


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
                                        Add Category
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

export default AddCategory