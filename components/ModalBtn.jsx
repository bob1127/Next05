import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div className="flex flex-col gap-2">
            <Button onPress={onOpen} className="max-w-fit">Open Modal</Button>
            <RadioGroup
                label="Select modal placement"
                orientation="horizontal"
                value={modalPlacement}
                onValueChange={setModalPlacement}
            >
                {/* <Radio value="auto">auto</Radio>
                <Radio value="top">top</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="center">center</Radio>
                <Radio value="top-center">top-center</Radio>
                <Radio value="bottom-center">bottom-center</Radio> */}
            </RadioGroup>
            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <iframe src="https://www.ultraehp.com/customized-iframe-tw.html" loading="lazy" width="398" height="540" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                               
                            </ModalBody>
                            
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
