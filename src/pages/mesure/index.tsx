import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

const Mesure = () => {
    return(
        <div className="flex flex-col items-center justify-center p-5 space-y-4 bg-white shadow-md rounded-lg">
            <div className="p-3 w-fit border rounded border-gray-300">
                <div className="text-center text-gray-500">Logo</div>
            </div>
            <div className="p-3 w-fit border rounded border-gray-300">
                <div className="text-center">
                    <Label>FMT ISOLATION</Label>
                </div>
            </div>
            <div className="p-3 w-full  rounded">
                <div className="text-center">
                    <Button variant={"ghost"} className="border">
                          <Link to="newclient">Test</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Mesure; 