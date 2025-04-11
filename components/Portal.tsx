"use client"

import { PortalProps } from "@/types/models"
import ReactDOM from "react-dom"

const Portal: React.FC<PortalProps> = ({ children, containerId }) => {
  const containerElement = containerId
    ? document.getElementById(containerId)
    : document.body

  return containerElement && ReactDOM.createPortal(children, containerElement)
}

export default Portal
