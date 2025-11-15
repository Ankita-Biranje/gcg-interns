enum CameraTypes { Primary, Secondary, Ultrawide, Macro, FrontCamera }
enum BackPanel { Plastic, Metal, Silicon, Glass }
enum Redmi { Note8Pro, Note9Pro, Note9Ultra }
enum Samsung { S23, S24, S25 }

interface Mobile {
    model: string,
    multiCamera: boolean,
    specifications: {
        storage: number,
        batteryCapacity: number,
        ram: number,
        cameraCount?: number,
        cameras?: Array<Camera>
    }
    screenSize: number,
    backPanel: BackPanel
}

interface Camera {
    megapixels: number,
    opticalZoom: number,
    lensType: CameraTypes
}

let Redmi8A: Mobile = {
    model: "Samsung Galaxy S24",
    multiCamera: true,
    screenSize: 6.2,
    backPanel: BackPanel.Metal,
    specifications: {
        storage: 128,
        batteryCapacity: 4500,
        ram: 8,
        cameraCount: 3,
        cameras: [
            {
                megapixels: 50,
                opticalZoom: 5,
                lensType: CameraTypes.Primary
            },
            {
                megapixels: 12,
                opticalZoom: 0.5,
                lensType: CameraTypes.Ultrawide
            },
            {
                megapixels: 20,
                opticalZoom: 1,
                lensType: CameraTypes.FrontCamera
            },
        ]
    }
}