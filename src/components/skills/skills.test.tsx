import { screen,render,logRoles } from "@testing-library/react";
import Skills from "./skills";

describe("skills",()=>{
    const skills=['html','css','js']

    // test("onerole",()=>{
    //     render(<Skills skills={skills} />);
    //     const onerole=screen.getByRole("list")
    //     expect(onerole).toBeInTheDocument()
    // })
    // test("allroles",()=>{
    //     render(<Skills skills={skills} />);
    //     const allrole=screen.getAllByRole("listitem")
    //     expect(allrole).toHaveLength(3)
    // })

    // test("emptylist",()=>{
    //     render(<Skills skills={[]} />);
    //     const list=screen.getByRole("list")
    //     expect(list).toBeInTheDocument()
    //     expect(list).toBeEmptyDOMElement()
    // })

    // test("duplicateskills",()=>{
    //     const skills=['html','css','js','html','css']
    //     render(<Skills skills={skills} />);
    //     const allrole=screen.getAllByRole("listitem")
    //     expect(allrole).toHaveLength(3)
    // })

    // test("render button after some time",()=>{
    //     render(<Skills skills={skills} />);
    //     const list=screen.getByRole("button",{
    //         name:'Start learning'
    //     })
    //     expect(list).toBeInTheDocument()
    // })

    test("render button after some time",async ()=>{
        const view=render(<Skills skills={skills} />);
        // screen.debug()
        logRoles(view.container)
        const list=await screen.findByRole("button",{
            name:'Start Learning'},{
                timeout:2000,
            }
        )

        // screen.debug()
        expect(list).toBeInTheDocument()
    })
    
    



    
})