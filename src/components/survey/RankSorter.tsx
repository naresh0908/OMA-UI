import { useState, useEffect } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "@hello-pangea/dnd";
import { GripVertical } from "lucide-react";

interface RankSorterProps {
    options: string[];
    value: string[] | undefined;
    onChange: (value: string[]) => void;
}

export function RankSorter({ options, value, onChange }: RankSorterProps) {
    // Initialize with options order if no value provided
    const [items, setItems] = useState<string[]>(value || options);

    // Sync items when value changes externally
    useEffect(() => {
        if (value && value.length > 0) {
            setItems(value);
        } else {
            setItems(options);
        }
    }, [value, options]);

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [movedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, movedItem);

        setItems(reorderedItems);
        onChange(reorderedItems);
    };

    return (
        <div className="space-y-4">
            <p className="text-sm text-[#4A4A4A] flex items-center gap-2">
                <GripVertical className="w-4 h-4" />
                Drag and drop to rank in order of priority (1 = highest)
            </p>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="rank-list">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`space-y-2 p-2 rounded-xl transition-colors duration-200 ${snapshot.isDraggingOver ? "bg-[#008489]/5" : "bg-transparent"
                                }`}
                        >
                            {items.map((item, index) => (
                                <Draggable key={item} draggableId={item} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 ${snapshot.isDragging
                                                    ? "border-[#008489] bg-white shadow-xl scale-[1.02]"
                                                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                                                }`}
                                        >
                                            <div className="flex-shrink-0 flex items-center gap-3">
                                                <GripVertical className="w-5 h-5 text-gray-400" />
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${snapshot.isDragging
                                                            ? "bg-[#008489] text-white"
                                                            : "bg-gray-100 text-[#002D72]"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <span className="text-base text-[#4A4A4A] leading-relaxed flex-1">
                                                {item}
                                            </span>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
