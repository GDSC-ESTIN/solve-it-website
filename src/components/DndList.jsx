import { Box, Button, createStyles, Group, Text, ThemeIcon } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const useStyles = createStyles((theme) => ({
    item: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
        padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        marginBottom: theme.spacing.sm,
    },

    itemDragging: {
        boxShadow: theme.shadows.sm,
    },

    symbol: {
        fontSize: 30,
        fontWeight: 700,
        width: 60,
    },
}));


export default function DndList({ state, handlers, colors }) {
    const { classes, cx } = useStyles();

    const items = state.map((item, index) => (
        <Draggable key={item} index={index} draggableId={item}>
            {(provided, snapshot) => (
                <Group position="left" align={"center"} justify="center"
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <ThemeIcon color={colors[index]} radius="xl">
                        {index + 1}
                    </ThemeIcon>
                    <Text>
                        {item}
                    </Text>
                </Group>
            )}
        </Draggable>
    ));

    return (
        <Box pb={"md"} mx={'lg'}>
            <DragDropContext
                onDragEnd={({ destination, source }) =>
                    handlers.reorder({ from: source.index, to: destination?.index || 0 })
                }
            >
                <Droppable droppableId="dnd-list" direction="vertical">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Box>
    );
}