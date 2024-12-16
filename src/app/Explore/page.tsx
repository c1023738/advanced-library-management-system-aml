import { Button} from "@/components/ui/button";
import client from "@/lib/wix";
import {convertWixImageToUrl } from "@/lib/wix";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { BookIcon } from "lucide-react";
import { redirect} from "next/navigation";

  
export default async function Home({
    searchParams,

    }:{
        searchParams:{search?: string}
    }){

    
     const Inventory = await client.items.queryDataItems({
        dataCollectionId: "Inventory",
     })
     .startsWith("title", searchParams.search ?? "")
     .find()
     .then((res) => res.items.map((item) => item.data));

     console.log(Inventory);

     console.log(Inventory);
    return(
        <div className=" container mx-auto py-12 space-y-12">
            <div className="flex justify-between items center">
            <h1 className="t4ext-2xl font-bold"> Library Items</h1>
            <form action={async (formData) =>{
              "use server"; 
              
                const search = formData.get("search");
                console.log(search);
                redirect(`/Explore?search=${search}`);
            }}className="flex gap-2">
                <Input name="search" type="text" placeholder="Search Library"/>
                <Button type="submit">Search</Button>
            </form>
            <div></div>
            </div>
            {Inventory.length === 0 && (
        <div className="border p-12 flex flex-col gap-4 items-center justify-center">
          <Image
            width={200}
            height={200}
            src={"/not-found.svg"}
            alt={"book not found icon"}
          />
          <p>No books found</p>
        </div>
      )}
            <div className="grid grid-cols-3 gap-4">

                {Inventory.map((Inventory) => (
          
            <Card key={Inventory?._id}>
            <CardHeader>
                <CardTitle>{Inventory?.title}</CardTitle>
            </CardHeader>
            <CardContent>
             {Inventory?.image ? (
                <Image
                  width={150}
                  height={200}
                  src={convertWixImageToUrl(Inventory.image)}
                  alt={Inventory?.title}
                  className="w-[150px] h-[200px] mb-4 rounded-lg"
                />
              ) : (
                <div className="flex flex-col gap-2 items-center justify-center w-[150px] h-[200px] mb-4 rounded-lg bg-gray-200">
                  <BookIcon className="w-10 h-10" />
                  <p>No Image</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
                <Button>Reserve Book</Button>
            </CardFooter>
            </Card>
            ))}
            </div>
        </div>
        
    );
}