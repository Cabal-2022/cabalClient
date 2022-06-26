import { useRouter } from "next/router";
import React, { useMemo } from "react";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import Table from "../../components/table";
export default function ServiceId() {
  const router = useRouter();
  const { serviceId } = router.query;

  //   const columns = useMemo(() => [
  //     { Header: `${serviceId} needs` },
  //     { Header: "For" },
  //   ]);

  // data which is linked to the headers
  const dataTable = [
    {
      id: 1,
      name: "Brymans Kyritz",
      username: "Bret",
      email: "brymans@stevens.edu",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "NYC",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "770-736-8031",
    },
    {
      id: 2,
      name: "Brendan beep boop",
      username: "Antonette",
      email: "mukund@stevens.edu",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Hoboken",
        zipcode: "90566",
      },
      phone: "123-456-7890",
    },
    {
      id: 3,
      name: "Marcos",
      username: "marcouscous",
      email: "marcos@stevens.edu",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "North Korea",
        zipcode: "59590-4157",
      },
      phone: "463-123-4447",
    },
  ];
  // Headers
  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "City", value: "address.city" },
  ];
  return (
    <div>
      <h2>{serviceId}</h2>
      <Table data={dataTable} column={column} />
    </div>
  );
}
