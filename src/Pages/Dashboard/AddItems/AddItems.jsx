import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                      
                        <legend className="fieldset-legend">Recipe Name*</legend>
                        <input
                            type="text"
                            className="input input-bordered w-full " placeholder="Recipe Name" {...register('name', {required: true})}
                            required />

                    </div>
                    <div className="flex gap-24">
                        {/* category */}
                        <div className="form-control w-full ">
                        
                            <legend className="fieldset-legend">Category*</legend>
                            <select {...register('category', {required: true})} defaultValue="Pick a color" className="select">
                                <option disabled={true}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>
                        </div>

                        {/* price */}
                              <div className="form-control w-full my-6">
                     
                        <legend className="fieldset-legend">price*</legend>
                        <input
                            type="number"
                            className="input input-bordered w-full " placeholder="Price" {...register('price', {required: true})} />
                    </div>
                   
                    </div>
                     {/* recipe details */}
                    <fieldset className="fieldset">
  <legend className="fieldset-legend">Recipe Details</legend>
  <textarea {...register('recipe')} className="textarea h-24" placeholder="Bio"></textarea>
 
</fieldset>
<div className="form-control w-full my-6">
    <input {...register('image', {required: true})} type="file" className="file-input" />
</div>

                   
                    <button className="btn">Add Item <FaUtensils className="ml-4"/></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;