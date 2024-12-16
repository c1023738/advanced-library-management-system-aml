import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { BookIcon, CalendarIcon } from "lucide-react";

import { z } from "zod";
import Image from "next/image";
import { cn } from "@/lib/utils";
//import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import client, { convertWixImageToUrl } from "@/lib/wix";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import DateTimePickerForm from "@/components/date-picker";


export function CalendarForm() {}

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const Inventory = await client.items
    .queryDataItems({
      dataCollectionId: "Inventory",
    })
    .startsWith("title", searchParams.search ?? "")
    .find()
    .then((res) => res.items.map((item) => item.data));

  console.log(Inventory);
  const handleDateChange = () => {};
  return (
    <div className=" container mx-auto py-12 space-y-12">
      <div className="flex justify-between items center">
        <h1 className="t4ext-2xl font-bold"> Library Items</h1>
        <form
          action={async (formData) => {
            "use server";

            const search = formData.get("search");
            console.log(search);
            redirect(`/Explore?search=${search}`);
          }}
          className="flex gap-2"
        >
          <Input name="search" type="text" placeholder="Search Library" />
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
            alt={"Item not found icon"}
          />
          <p>No Item found</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {Inventory.map((Inventory) => (
          <Card key={Inventory?._id}>
            <CardHeader>
              <CardTitle className="grid w-full items-center gap-1.5">
                {Inventory?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Inventory?.image ? (
                <Image
                  width={150}
                  height={200}
                  src={convertWixImageToUrl(Inventory.image)}
                  alt={Inventory?.title}
                  className="w-[150px] h-[200px] mb-4 rounded-lg "
                />
              ) : (
                <div className="flex flex-col gap-2 items-center justify-center w-[150px] h-[200px] mb-4 rounded-lg bg-gray-200">
                  <BookIcon className="w-10 h-10" />
                  <p>No Image</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Reserve</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add a new Item</DialogTitle>
                    <DialogDescription>
                      If you didn&apos;t find a Item you&apos;re looking for,
                      add one here.
                    </DialogDescription>
                  </DialogHeader>
                  {Inventory?.image ? (
                    <Image
                      width={150}
                      height={200}
                      src={convertWixImageToUrl(Inventory.image)}
                      alt={Inventory?.title}
                      className="w-[150px] h-[200px] mb-4 rounded-lg "
                    />
                  ) : (
                    <div className="flex flex-col gap-2 items-center justify-center w-[150px] h-[200px] mb-4 rounded-lg bg-gray-200">
                      <BookIcon className="w-10 h-10" />
                      <p>No Image</p>
                    </div>
                  )}
                  <p>{Inventory?.author}</p>

                  <form action="">
                    <div>
                      <p>Select Start Date and End Date</p>
                      <DateTimePickerForm />
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

////<Link href={`/Explore/${Inventory?._id}`}>Reserve</Link>
