import React from "react";
import {Breadcrumbs} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const Breadcrumb = ({data = []}) => {
    return (
        <>
            <Breadcrumbs>
                <Link to="/" className="opacity-60">
                    Bosh sahifa
                </Link>
                {data.length
                    ? data.map((item) => {
                          return (
                              <Link key={item} to="/" className="opacity-60">
                                  {item}
                              </Link>
                          );
                      })
                    : undefined}

                <Link to="/">Breadcrumbs</Link>
            </Breadcrumbs>
        </>
    );
};

export default Breadcrumb;
