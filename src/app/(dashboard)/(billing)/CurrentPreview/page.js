  import Button from "@/components/button";
  import Card from "@/components/Cards";
  import CardBody from "@/components/Cards/cardbody";
  import CardFooter from "@/components/Cards/cardfooter";
  import CardHeader from "@/components/Cards/cardheader";
  import Images from "@/components/image";

  export default function CurrentPreview() {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">

      <Card className="w-[1000px] h-[430px] flex flex-col">
        <CardHeader>
          <h2>Current Plan Overview</h2>
        </CardHeader>

        <CardBody>
          <div className="flex justify-between">
            <div className="flex flex-col gap-5">
              <p className="font-thin">Current Plan</p>
              <h2 className="font-bold">Started may-2026</h2>
              <p>
                Unlimited access to essential tools for design, bootstrap themes,
                illustrator and icons.
              </p>
              <p>
                {" "}
                Next Payment: <p className="text-blue-500">$499.00 USD </p>
                <p className="font-bold">May 1, 2026</p>
              </p>
            </div>
            <div id="right" className="flex flex-col gap-5">
              <p>Yearly Payment</p>
              <h1 className="text-blue-500 text-3xl font-bold">$499 USD</h1>
              <p>Learn more about our membership policy</p>
              <div id="btn-cont" className="flex flex-col gap-2">
                <Button
                  btntext={"Change Plan"}
                  className="bg-black text-white rounded-lg h-[40px] p-2"
                  />
                <Button
                  btntext={"Cancel Subscription"}
                  className="border-1 h-[40px] rounded-lg p-2"
                  />
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex flex-row justify-between">
            <div id="left" className="flex flex-col">
              <p>PAYMENT METHOD</p>
              <div className="flex gap-2 pb-2">
              <Images src={"/creditcard.svg"} alttext={"Card"} hg={20} wd={20} />
              *****89596
              </div>
            </div>
            <div className="flex gap-3 pb-3 pr-3">
              <Button btntext={"Remove"} className="text-red-500 pr-2"/>
              <Button btntext={"Change Card"} className="border w-30 bg-transparent text-gray-600 rounded-xl"/>
            </div>
          </div>  
        </CardFooter>
      </Card>
                  </div>
    );
  }
