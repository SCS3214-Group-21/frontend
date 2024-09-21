import InputField2 from '../ui/InputField2';

function SocialMediaForm() {
    return (
        <div>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5'>
                <div className='w-full p-3 px-5 pt-10'>
                    <h1 className='text-4xl text-black'>Social Media Details</h1>
                </div>
                <div className='flex flex-col flex-wrap items-center justify-center w-full gap-5 p-3 px-5 md:flex-row lg:gap-10'>
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
