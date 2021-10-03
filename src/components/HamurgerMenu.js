import React from 'react'
import { Flex, Text, VStack, Divider, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Icon } from '@chakra-ui/icon'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import { AiFillProject, AiFillPhone } from 'react-icons/ai'
import { Drawer, DrawerOverlay, DrawerBody, DrawerContent, DrawerHeader } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import Link from 'next/link'
function HamurgerMenu() {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            pos='absolute'
            top='0'
            right='0'>
            <Button
                variant='unstyled'
                _focus={{ outline: 'none' }}
                fontSize={24}
                p={1}
                onClick={onOpen}>
                <Icon as={GiHamburgerMenu} color='mygreen.800' />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    minW='200px'
                    maxW='260px'
                    h='100vh'
                    bg='mygreen.800'
                    flexDir='column'>
                    <DrawerHeader>
                        <VStack m='10px auto' cursor='pointer'>
                            <HStack justifyContent='space-between' w='100%'>
                                <Link passHref href='/'>
                                    <Text
                                        color='#fff'
                                        fontSize={20}
                                        fontWeight={500}
                                    >
                                        Just Some Logo
                                    </Text>
                                </Link>
                                <Button
                                    _focus={{ outline: 'none' }}
                                    bg='transparent'
                                    _focusWithin={{
                                        bg: 'none'
                                    }}
                                    color='#fff'
                                    fontSize={24}
                                    onClick={onClose}
                                >
                                    <Icon as={CgClose} />
                                </Button>
                            </HStack>
                            <Divider orientation='horizontal' />
                        </VStack>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack
                            mt={20}
                            spacing={12}
                            alignItems='center'
                            w='100%'>
                            <Link passHref href='/about'>
                                <HStack
                                    spacing={3}
                                    w='100%'
                                    justifyContent='center'
                                    _hover={{ bg: '#265958' }}
                                    cursor='pointer'
                                    py={2}>
                                    <Icon as={FaUser} color='#fff' />
                                    <Text
                                        fontSize={18}
                                        color='#fff'>About Me</Text>
                                </HStack>
                            </Link>
                            <Link passHref href='/projects'>
                                <HStack
                                    spacing={3}
                                    w='100%'
                                    justifyContent='center'
                                    _hover={{ bg: '#265958' }}
                                    cursor='pointer'
                                    py={2}
                                >
                                    <Icon as={AiFillProject} color='#fff' />
                                    <Text
                                        fontSize={18}
                                        color='#fff'>My Projects</Text>
                                </HStack>
                            </Link>
                            <Link passHref href='/contact'>
                                <HStack
                                    spacing={3}
                                    w='100%'
                                    justifyContent='center'
                                    _hover={{ bg: '#265958' }}
                                    cursor='pointer'
                                    py={2}
                                >
                                    <Icon as={AiFillPhone} color='#fff' />
                                    <Text
                                        fontSize={18}
                                        color='#fff'>Contact Me</Text>
                                </HStack>
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default HamurgerMenu