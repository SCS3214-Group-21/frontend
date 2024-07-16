import React from 'react';
import InputField2 from './ui/InputField2';
import SelectField from './ui/SelectField';
import TextAreaField from './ui/TextAreaField';

function CreatePackageForm() {
    return (
        <div>
        <form className='w-full bg-white'>
            <div className='flex flex-row gap-5 w-full p-5'>
                <div className='w-full'>
                    <InputField2 
                        id={1}
                        name={"Name"}
                        placeholder={"Enter your name"}
                        type={"text"}
                    />
                </div>
                <div className='w-full'>
                    <InputField2 
                        id={1}
                        name={"Name"}
                        placeholder={"Enter your name"}
                        type={"text"}
                    />
                </div>
                <div className='w-full'>
                <SelectField 
                id="select-input" 
                name="Select Option" 
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]} 
            />
                </div>
                <div className='w-full'>
                <TextAreaField id="textarea" placeholder="Enter your message" name="Message" />
                </div>
            </div>
        </form>
        </div>
    );
}

export default CreatePackageForm;