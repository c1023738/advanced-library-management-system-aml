import client from "../lib/wix";

export default async function Home(){

    
     const Inventory = await client.items.queryDataItems({
        dataCollectionId: "Inventory",
     })
     .find()
     .then((res) => res.items.map((item) => item.data));

     console.log(Inventory);

     console.log(Inventory);
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="t4ext-2xl font-bolder"> Library Items</h1>


            <div className="grid grid-cols-3 gap-4">
                {Inventory.map((Inventory) => (
                    <div key={Inventory?._id}>
                        <h2>{Inventory?.title}</h2>
                    </div>            
            ))}
            </div>
        </div>
        
    );
}