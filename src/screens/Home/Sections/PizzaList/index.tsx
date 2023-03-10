import { Box, Button, Flex, Heading, } from "@chakra-ui/react"
import { PizzaCard } from "../../../../components/PizzaCard"
import { Plus } from "phosphor-react"

export const PizzaListSection = () => {
    return (
        <Box my="40px">
            <Heading color="gray.600">Conheça algumas de nossas pizzas</Heading>
            <Flex gap="32px" overflowX="auto" my="40px" alignItems="center">
                <PizzaCard
                    name="Calabresa sem queijo"
                    description="molho de tomate da casa, mozzarela, azeitona preta, calabresa, cebola roxa e orégano"
                    imageSrc="https://i.ibb.co/Rh7Mzww/Do-Contra.jpg"
                    price="19.90"
                />
                <PizzaCard
                    name=" Napolitana"
                    description="Molho de tomate, tomates, azeitona, provolone e mozzarela"
                    imageSrc="https://i.ibb.co/j8xjJb7/NAPOLITANA.jpg"
                    price="34.90"
                />
                <PizzaCard
                    name="Marguerita"
                    description="molho de tomate, tomates, tomates, parmesão, manjericão, azeite de oliva e mozzarela"
                    imageSrc="https://i.ibb.co/gdmjW5L/Marguerita.jpg"
                    price="19.90"
                />
                <PizzaCard
                    name="Quatro Queijo"
                    description="molho de tomate, mozzarela, provolone, parmesão e catupiry"
                    imageSrc="https://i.ibb.co/FzwmZb6/Quatro-Queijos.jpg"
                    price="19.90"
                />
                <PizzaCard
                    name="Frango com catupiry"
                    description="frango desfiado ao molho de catupiry, molho de tomate, mozzarela, provolone, parmesão e catupiry"
                    imageSrc="https://i.ibb.co/QbShzPN/Frango-com-Catupiry-2.jpg"
                    price="19.90"
                />
                <Button variant="link" ml="18px" leftIcon={<Plus />}>Ver mais</Button>
            </Flex>
        </Box>
    )
}