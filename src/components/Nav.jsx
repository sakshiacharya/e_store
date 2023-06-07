import React from 'react';
import { Navbar, Button, Link, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { Buy, Search, Heart } from 'react-iconly';

export const Nav = () => {

    const [variant, setVariant] = React.useState("sticky");

    const variants = ["static", "floating", "sticky"];

    return (
        <React.Fragment>
            <nav className='p-auto'>
                <Navbar isBordered variant={variant} className='font-serif'>
                    <Navbar.Brand>
                        <Buy set="light" primaryColor="black" />
                        <Text className='ml-3 font-serif text-2xl' b color="inherit" hideIn="xs">
                            E-Store
                        </Text>
                    </Navbar.Brand>
                    <Navbar.Content hideIn="xs" className='text-xl' >
                        <Navbar.Link href="#">Categories</Navbar.Link>
                        <Navbar.Link isActive href="#">Deals</Navbar.Link>
                        <Navbar.Link href="#">Mobiles</Navbar.Link>
                        <Navbar.Link href="#">Laptops</Navbar.Link>
                    </Navbar.Content>


                    <Navbar.Content
                        css={{
                            "@xsMax": {
                                w: "100%",
                                jc: "space-between",
                            },
                        }}
                    >
                        <Navbar.Item
                            css={{
                                "@xsMax": {
                                    w: "100%",
                                    jc: "center",
                                },
                            }}
                        >
                            <Input
                                clearable
                                contentLeft={
                                    <Search set="light" primaryColor="black" size={16} />
                                    // <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
                                }
                                contentLeftStyling={false}
                                css={{
                                    w: "100%",
                                    "@xsMax": {
                                        mw: "300px",
                                    },
                                    "& .nextui-input-content--left": {
                                        h: "100%",
                                        ml: "$4",
                                        dflex: "center",
                                    },
                                }}
                                placeholder="Search..."
                            />
                        </Navbar.Item>
                    </Navbar.Content>

                    <Navbar.Content className='text-xl'>
                        <Navbar.Link color="inherit" href="#">
                            Login
                        </Navbar.Link>
                        <Navbar.Item>
                            <Button auto flat as={Link} href="#">
                                Sign Up
                            </Button>
                        </Navbar.Item>
                        <Navbar.Link color="inherit" href="#">
                            <Buy set="light" primaryColor="" />
                        </Navbar.Link>
                        <Navbar.Link>
                            <Heart set="light" primaryColor="" />
                        </Navbar.Link>
                    </Navbar.Content>
                </Navbar>
            </nav>
        </React.Fragment>
    )
}
