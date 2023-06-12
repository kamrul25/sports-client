
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" my-8">
            <p className="footer-title uppercase  mb-2"> {subHeading} ---</p>
            <h3 className="text-3xl uppercase ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;