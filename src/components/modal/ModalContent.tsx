"use client";



const ModalContent = (props: {
  category: string; itemName: string; price: string; description: string; imageUrl: string;
}) => {

  return (
    <div>
      <div className="flex">
        <div>
          <img
            height={"50%"}
            width={"50%"}
            alt={"pic"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufHiMlz2-UiSmNZ7yWNjl8LAGt0ejl9x29Q&usqp=CAU"
          />{" "}
        </div>
        <div>
          <h1>{props.category}</h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {props.itemName}
          </h1>
          <br />
        </div>
      </div>
      <br />

      <div className="flex gap-10">
        <div>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            About this course
          </h3>
          <p>
           {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
