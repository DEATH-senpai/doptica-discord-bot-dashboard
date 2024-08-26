import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Text, Image, Rect, Transformer } from "react-konva";
import useImage from "use-image";

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const TextItem = ({ text, shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        offset={0}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const KonvaImage = ({ src, data, isSelected, onSelect, onChange }) => {
  const [image] = useImage(src);
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        onClick={onSelect}
        onTap={onSelect}
        image={image}
        {...data}
        ref={shapeRef}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...data,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...data,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

let initRect = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "green",
  id: "rect2",
};

const initImg = {
  id: "img1",
  width: 75,
  height: 75,
  // center it
  x: 400 / 2 - 75 / 2,
  y: 37.5 - 20,
};

const textsData = [
  {
    // x: 400 / 2 - 50 / 2,
    // y: 150 / 2,
    id: "text-1",
    fontSize: 20,
    // fontFamily: "Arial",
    fill: "white",
    text: "Pro Bot",
  },
  {
    // x: 400 / 2 - 50 / 2,
    // y: 150 / 2 + 20,
    id: "text2",
    fontSize: 20,
    // fontFamily: "Arial",
    fill: "white",
    text: "Welcome To Our Server",
  },
];

const Konva = () => {
  const [rect, setRect] = useState(initRect);
  const [imgData, setImgData] = useState(initImg);
  const [texts, setTexts] = useState(textsData);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  return (
    <>
      <Stage
        width={400}
        height={150}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {/* <Text text="Try to drag a star" draggable />
          <Rect width={50} height={50} fill="red" draggable />*/}
          <KonvaImage
            src="/discord.svg"
            data={imgData}
            onSelect={() => {
              selectShape(imgData.id);
            }}
            onChange={(newAttrs) => {
              setImgData(newAttrs);
            }}
          />
          {texts.map((text, i) => {
            return (
              <TextItem
                key={i}
                shapeProps={text}
                isSelected={text.id === selectedId}
                onSelect={() => {
                  selectShape(text.id);
                }}
                onChange={(newAttrs) => {
                  const textsCop = texts.slice();
                  textsCop[i] = newAttrs;
                  setTexts(texts);
                }}
              />
            );
          })}
          {/* <Rectangle
            shapeProps={rect}
            isSelected={rect.id === selectedId}
            onSelect={() => {
              selectShape(rect.id);
            }}
            onChange={(newAttrs) => {
              // const rects = rectangles.slice();
              setRect(newAttrs);
            }}
          /> */}
        </Layer>
      </Stage>
      <style>{`
        .konvajs-content {
          // border: 1px solid #ccc;
          background-color: #151925;
          margin: 20px auto;
        }
      `}</style>
    </>
  );
};

export default Konva;

