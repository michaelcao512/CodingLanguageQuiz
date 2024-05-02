import {PrismaClient} from '@prisma/client'
import {withAccelerate} from '@prisma/extension-accelerate'

let prisma = new PrismaClient().$extends(withAccelerate())

export default prisma;