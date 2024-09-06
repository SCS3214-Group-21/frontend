import InputField2 from './ui/InputField2';

function SocialMediaForm() {
    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='w-full p-3 pt-10 px-5'>
                    <h1 className='text-black text-4xl'>Social Media Details</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center flex-wrap  gap-5 lg:gap-10 w-full p-3 px-5'>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Facebook"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Instergram"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"Twitter"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                    <div className='md:w-[45%] w-full'>
                        <InputField2 
                            id={1}
                            name={"URL"}
                            placeholder={"Input"}
                            type={"text"}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SocialMediaForm;
