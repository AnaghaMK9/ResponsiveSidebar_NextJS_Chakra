import { Flex, VStack, Text, Divider, HStack } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { FaUser } from 'react-icons/fa'
import { AiFillProject, AiFillPhone } from 'react-icons/ai'
import Link from 'next/link'
import HamurgerMenu from './HamurgerMenu'
import { useMediaQuery } from '@chakra-ui/media-query'
function Sidebar() {
    const [isScreenBelow560] = useMediaQuery('(max-width : 560px)')

    if (isScreenBelow560) {
        return <HamurgerMenu />
    } else {
        return (
            <Flex
                w='200px'
                h='100vh'
                bg='mygreen.800'
                flexDir='column'
            >
                <VStack m='40px auto' cursor='pointer'>
                    <Link passHref href='/'>
                        <Text
                            color='#fff'
                            fontSize={24}
                            fontWeight={500}
                        >
                            Just Some Logo
                        </Text>
                    </Link>
                    <Divider orientation='horizontal' />
                </VStack>
                <VStack
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
                                fontSize={20}
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
                                fontSize={20}
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
                                fontSize={20}
                                color='#fff'>Contact Me</Text>
                        </HStack>
                    </Link>
                </VStack>
            </Flex>
        )
    }
}

export default Sidebar