import { Box } from '@chakra-ui/layout';
import Sidebar from '../Sidebar';

function Layout({ children }) {
    
    return (
        <>
            <Sidebar />
            <Box
                pos='absolute'
                top='0'
                left={['0', '0', '0', '200px', '200px', '200px']}
                w={['80%', '80%', '80%', 'calc(100vw-200px)', 'calc(100vw-200px)', 'calc(100vw-200px)']}
                h='auto'
            >
                {children}
            </Box>
        </>
    )
}

export default Layout