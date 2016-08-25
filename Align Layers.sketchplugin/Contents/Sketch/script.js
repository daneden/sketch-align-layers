var align = {
    Left: "MSAlignLayersLeftAction",
    Center: "MSAlignLayersCenterAction",
    Right: "MSAlignLayersRightAction",
    Top: "MSAlignLayersTopAction",
    Middle: "MSAlignLayersMiddleAction",
    Bottom: "MSAlignLayersBottomAction"
};

function alignLayers(context, alignment) {
  var doc = context.document
  var action = doc.actionsController().actionWithID(alignment);

  if(action.validate()) {
      action.doPerformAction(nil);
  }
}

// Horizontal alignment
function alignLeft(context) {
  alignLayers(context, align.Left);
}

function alignCenter(context) {
  alignLayers(context, align.Center);
}

function alignRight(context) {
  alignLayers(context, align.Right);
}

// Vertical alignment
function alignTop(context) {
  alignLayers(context, align.Top);
}

function alignMiddle(context) {
  alignLayers(context, align.Middle);
}

function alignBottom(context) {
  alignLayers(context, align.Bottom);
}

