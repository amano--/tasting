// import classnames from 'classnames';
import { fitContent } from '@adobe/react-spectrum'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

/**
 *

 .popup{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%)
             translateY(-50%);
}

.popup{
  position: fixed;
  inset: 0;
  margin: auto;
}
   *
 */

export const Example = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box>
        <Box sx={{ bg: 'var(--chakra-colors-pink-500)' }}>
          <h1>header</h1>
        </Box>
        <Box sx={{ bg: 'var(--chakra-colors-blue-500)' }}>
          <h1>side</h1>
        </Box>
        {/* colors.blue.500 */}
        <Box sx={{ bg: 'var(--chakra-colors-green-500)' }}>
          <h1>main</h1>
        </Box>

        {/* [CSSで上下左右の中央に配置する時の「position: fixed;」での新しい記述方法](https://coliss.com/articles/build-websites/operation/css/position-fixed-centering-new-way.html) */}
        <Box
          sx={{
            bg: 'var(--chakra-colors-red-500)',
            position: 'fixed',
            inset: 0,
            margin: 'auto',
            width: 'fit-content',
            height: 'fit-content',
          }}
        >
          <h1>footer</h1>
        </Box>
      </Box>
    </>
  )
}

export const MyModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
