"use client"

import { useEffect, useRef } from "react"
import { IoCloseOutline } from "react-icons/io5"
import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import { useAppDispatch } from "@/redux/hooks"
import { appActions } from "@/redux/slices/appSlice"

export default function LocationModal() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapInstance = useRef<Map | null>(null)
  const dispatch = useAppDispatch()

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(e.currentTarget.id)
    if (e.currentTarget.id === "location-modal") {
      dispatch(appActions.setLocationModalDisplay(false))
    }
  }

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = new Map({
        target: mapContainerRef.current as HTMLElement,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [-123.1236, 49.2476],
          zoom: 17,
          projection: "EPSG:4326",
        }),
      })
    }

    document.documentElement.style.overflow = "hidden"
    document.documentElement.style.height = "100vh"

    return () => {
      document.documentElement.style.overflow = "unset"
      document.documentElement.style.height = "auto"
    }
  }, [])

  return (
    <div
      id="location-modal"
      className="w-dvw h-dvh fixed inset-0 flex justify-center items-center z-[1000] bg-black bg-opacity-20 backdrop-blur-xl overflow-y-auto pt-20"
      onClick={handleBackdropClick}
    >
      <div
        className="w-[80%] h-full bg-gray-100 text-black rounded-lg shadow-xl py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-4">
          <header>
            <h3 className="text-2xl py-4 font-bold">Verlio</h3>
          </header>
          <IoCloseOutline
            size={40}
            className="text-primary-default cursor-pointer"
            color="gray"
            onClick={() => dispatch(appActions.setLocationModalDisplay(false))}
          />
        </div>
        <div
          ref={mapContainerRef}
          className="w-full h-96 border-y-2 border-white"
        ></div>
        <div className="p-4 bg-gray-100">
          <strong className="block text-lg">Address</strong>
          <i>somewhere nice in Vancouver!</i>
        </div>
        <div className="px-4 w-full bg-gray-100 pb-4">
          <strong className="inline-block text-lg py-2">Hours</strong>
          <table border={1} className="w-full">
            <thead>
              <tr className="text-left text-primary-light">
                <th>Day</th>
                <th>Open</th>
                <th>Close</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>12:00 PM</td>
                <td>09:00 PM</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>12:00 PM</td>
                <td>09:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>12:00 PM</td>
                <td>09:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>12:00 PM</td>
                <td>09:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>12:00 PM</td>
                <td>10:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>12:00 PM</td>
                <td>11:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>12:00 PM</td>
                <td>11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
